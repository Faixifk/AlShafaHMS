from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DoctorViewSet
from .views import PatientViewSet
from .views import PrescriptionViewSet

router = DefaultRouter()
router.register(r'doctors', DoctorViewSet)
router.register(r'patients', PatientViewSet)
router.register(r'prescriptions', PrescriptionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
