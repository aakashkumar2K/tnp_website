# Generated by Django 5.0.2 on 2024-05-24 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0019_userprofile_college'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='is_verified',
            field=models.BooleanField(default=False),
        ),
    ]
