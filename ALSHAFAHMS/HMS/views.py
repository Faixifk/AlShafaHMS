from django.shortcuts import render
from rest_framework import viewsets
from .models import Doctor
from .serializers import DoctorSerializer
from .models import Patient
from .models import Prescription
from .serializers import PatientSerializer
from .serializers import PrescriptionSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.
class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class PrescriptionViewSet(viewsets.ModelViewSet):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

    @action(detail=False, methods=['get'], url_path='phone/(?P<phone_number>\w+)')
    def get_by_phone(self, request, phone_number=None):
        try:
            patient = Patient.objects.get(phone_number=phone_number)
            serializer = self.get_serializer(patient)
            return Response(serializer.data)
        except Patient.DoesNotExist:
            return Response({"error": "Patient does not exist"}, status=404)
