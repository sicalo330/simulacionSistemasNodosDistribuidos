import os
from django.conf import settings

def fileSplitter(ruta_relativa, nombre_archivo):

    ruta_completa = os.path.join(settings.BASE_DIR, ruta_relativa.lstrip("/"))

    with open(ruta_completa, "r", encoding="utf-8") as f:
        lineas = f.readlines()
    
    total_lineas = len(lineas)
    lineas_por_parte = total_lineas // 5

    for i in range(5):
        inicio = i * lineas_por_parte

        if i == 4:
            fin = total_lineas
        else:
            fin = (i + 1) * lineas_por_parte

        fragmento_lineas = lineas[inicio:fin]

        carpeta_nodo = os.path.join(settings.BASE_DIR, f"media/nodos/nodo{i+1}")
        os.makedirs(carpeta_nodo, exist_ok=True)

        nombre_fragmento = f"{nombre_archivo}_parte{i+1}.txt"

        ruta_fragmento = os.path.join(carpeta_nodo, nombre_fragmento)

        with open(ruta_fragmento, "w", encoding="utf-8") as f:
            f.writelines(fragmento_lineas)