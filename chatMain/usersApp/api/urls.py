from rest_framework.routers import DefaultRouter
from .views import AccountViewSet

Account_router = DefaultRouter()
Account_router.register(r'accounts',AccountViewSet)