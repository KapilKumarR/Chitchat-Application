from rest_framework.viewsets import ModelViewSet
from ..models import (Account, Note)
from rest_framework.decorators import (api_view,permission_classes)
from rest_framework.permissions import (IsAuthenticated, AllowAny)
from rest_framework.response import Response
from .Serializer import (AccountSerializer, NoteSerializer)


class AccountViewSet(ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_note(request):
    user = request.user
    notes = Note.objects.filter(owner=user)
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)