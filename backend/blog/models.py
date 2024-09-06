from django.db import models

# Define choices for categories
CATEGORY_CHOICES = [
    ('Agriculture', 'Agriculture'),
    ('Fashion', 'Fashion'),
    ('Business', 'Business'),
    ('Sports', 'Sports'),
    ('Cars', 'Cars'),
    ('Vacations', 'Vacations'),
    
]

class Post(models.Model):
    image = models.ImageField(upload_to='media/uploads/images', null=False, blank=False, default="profile.jpg")
    title = models.CharField(max_length=255, default='Default Name')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='Uncategorized')
    description = models.TextField()

    def __str__(self):
        return self.title
