import os

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Message
from .serializers import MessageSerializer
from .fileSplitter import fileSplitter


@api_view(['GET', 'POST'])
def messages(request):

    if request.method == 'GET':
        messages = Message.objects.all()
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = MessageSerializer(data=request.data)
    #{'id': 5, 'text': 'SuperPrueba.txt', 'file': '/media/uploads/SuperPrueba_mU4HhvZ.txt', 'created_at': '2026-03-10T19:25:54.125444Z'}
        if serializer.is_valid():
            serializer.save()
            
            file_path = serializer.data['file']#'/media/uploads/SuperPrueba_mU4HhvZ.txt'
            file_name = os.path.basename(file_path)# SuperPrueba_mU4HhvZ.txt

            fileSplitter(file_path,file_name) 
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)