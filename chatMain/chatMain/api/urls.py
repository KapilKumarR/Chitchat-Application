from rest_framework.routers import DefaultRouter
from usersApp.api.urls import Account_router
from django.urls import path, include

router = DefaultRouter()
#Account
router.registry.extend(Account_router.registry)

urlpatterns = [
    path("",include(router.urls))
]
