from rest_framework import routers
#from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView,)
from .views import AccountViewSet,NoteViewSet


# Create the DefaultRouter and register the ViewSet
Account_router = routers.DefaultRouter()
Account_router.register(r'accounts', AccountViewSet)

# Create the SimpleRouter and Token the ViewSet
Note_router = routers.SimpleRouter()
Note_router.register(r'notes', NoteViewSet, basename='notes')
# Define the urlpatterns
#urlpatterns = [
 #   path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  #  path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
   # path('notes/', get_note, name='get_note'),
   # path('', include(Account_router.urls)),  # Include DefaultRouter URLs
#]
