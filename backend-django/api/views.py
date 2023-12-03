from .serializers import NoteSerialzer
from .models import Note

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status   

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        "To view notes list": 'note-list/',
        "To create note":"note-create/",
        "To delete note":"note-delete/id",
        "To update note" : "note-update/id",
    }

    return Response(api_urls)

@api_view(['GET'])
def noteList(request):
    notes = Note.objects.all()
    if not notes:
        return Response([])
    serialzer = NoteSerialzer(notes, many=True)
    return Response(serialzer.data)

@api_view(['GET'])
def noteDetail(request, pk):
    note = Note.objects.get(id=pk)
    if not note:
        return Response({"message": "No notes available"})
    serialzer = NoteSerialzer(note, many=False)
    return Response(serialzer.data)

@api_view(['POST'])
def noteCreate(request):
    serializer = NoteSerialzer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['PUT'])
def noteUpdate(request, pk):
    try:
        note = Note.objects.get(id=pk)
    except Note.DoesNotExist:
        return Response({"message": "Note not found"}, status=status.HTTP_404_NOT_FOUND)
    serialzer = NoteSerialzer(instance=note, data=request.data)
    if serialzer.is_valid():
        serialzer.save()
    else:
        return Response({"Message ": "invalid data"})
    return Response(serialzer.data)

@api_view(['DELETE'])
def noteDelete(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response("Item deleted")