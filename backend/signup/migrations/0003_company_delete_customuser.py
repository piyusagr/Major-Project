# Generated by Django 5.0.2 on 2024-02-15 11:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('signup', '0002_customuser'),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('logo', models.ImageField(blank=True, null=True, upload_to='company_logos/')),
            ],
        ),
        migrations.DeleteModel(
            name='CustomUser',
        ),
    ]