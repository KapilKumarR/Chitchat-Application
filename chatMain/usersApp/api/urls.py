from rest_framework import routers
from .views import AccountViewSet,NoteViewSet


# Create the DefaultRouter and register the ViewSet
Account_router = routers.DefaultRouter()
Account_router.register(r'accounts', AccountViewSet)

# Create the SimpleRouter and Token the ViewSet
Note_router = routers.SimpleRouter()
Note_router.register(r'notes', NoteViewSet, basename='notes')