from django.db import models

# Create your models here.
class Registerkrapin(models.Model):
    firstname = models.CharField(max_length=30,null=True)
    profession = models.CharField(max_length=30)
    idnumber = models.IntegerField()
    dob= models.DateField()
    mobilenumber = models.IntegerField()
    town = models.CharField(max_length=20)
    county = models.CharField(max_length=20)
    box = models.CharField(max_length=10)



    def _str_(self):
        return self.firstname