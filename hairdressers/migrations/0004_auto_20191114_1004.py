# Generated by Django 2.2.7 on 2019-11-14 10:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hairdressers', '0003_auto_20191113_1609'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stylist',
            name='about',
            field=models.TextField(max_length=600, null=True),
        ),
    ]
