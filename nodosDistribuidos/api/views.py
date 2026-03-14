import os
import requests

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Message
from .serializers import MessageSerializer


@api_view(['GET', 'POST'])
def messages(request):

    if request.method == 'GET':
        messages = Message.objects.all()
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)


    if request.method == 'POST':

        # Obtener archivo enviado desde el frontend
        archivo = request.FILES.get('file')

        if not archivo:
            return Response({"error": "No se recibió archivo"}, status=400)

        print("Tipo de archivo:", archivo.content_type)

        # Leer el archivo UNA SOLA VEZ
        contenido = archivo.read()

        respuestas = []

        for i in range(1,6):

            url = f"http://localhost:800{i}/api/receiveFiles/"

            files = {
                'file': (archivo.name, contenido, archivo.content_type)
            }

            try:
                response = requests.post(url, files=files)
                datos = response.json()

                respuestas.append({
                    "nodo": i,
                    "datos":datos,
                    "status": response.status_code
                })

                print(f"Nodo {i} respondió:", response.status_code)

            except requests.exceptions.RequestException as e:

                respuestas.append({
                    "nodo": i,
                    "error": str(e)
                })

                print(f"Error con nodo {i}:", e)

        return Response({
            "resultados": respuestas
        })