from django.contrib import admin
from .models import Registerkrapin

class TodoAdmin(admin.ModelAdmin):
    list_display = ('firstname', 'profession', 'idnumber', 'dob', 'mobilenumber', 'town', 'county', 'box')

# Register your models here.

admin.site.register(Registerkrapin, TodoAdmin)