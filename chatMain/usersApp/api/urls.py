from rest_framework.routers import DefaultRouter
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import AccountViewSet, get_note


# Create the DefaultRouter and register the ViewSet
Account_router = DefaultRouter()
Account_router.register(r'accounts', AccountViewSet)

# Define the urlpatterns
urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('notes/', get_note, name='get_note'),
    path('', include(Account_router.urls)),  # Include DefaultRouter URLs
]
