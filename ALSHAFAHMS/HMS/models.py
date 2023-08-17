from django.db import models
import uuid
from django.utils import timezone


class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialty = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)

class Patient(models.Model):
    name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=15, unique=True, primary_key=True)
    address = models.CharField(max_length=300)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)

    def __str__(self):
        return self.name
    
class Prescription(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    date_time = models.DateTimeField(default=timezone.now)
    total_amount = models.DecimalField(max_digits=8, decimal_places=2)
