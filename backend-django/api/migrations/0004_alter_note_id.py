# Generated by Django 4.1.1 on 2023-12-01 15:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_rename_date_created_note_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
