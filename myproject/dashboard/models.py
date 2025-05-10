from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Client(models.Model):
    full_name = models.CharField(max_length=120)
    email = models.EmailField(unique=True)
    born_date = models.DateField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.full_name