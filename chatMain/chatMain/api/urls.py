from rest_framework.routers import DefaultRouter
from usersApp.api.urls import Account_router, Note_router
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
# Account
router.registry.extend(Account_router.registry)
router.registry.extend(Note_router.registry)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include(Account_router.urls)),  # Include DefaultRouter URLs for Account
    path('notes/', include(Note_router.urls)),  # Include DefaultRouter URLs for Notes if needed
]
