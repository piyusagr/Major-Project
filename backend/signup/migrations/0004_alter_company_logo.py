# Generated by Django 5.0.2 on 2024-02-15 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('signup', '0003_company_delete_customuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='logo',
            field=models.URLField(blank=True, null=True),
        ),
    ]
