# Generated by Django 4.1.1 on 2023-12-02 02:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_note_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='id',
            field=models.CharField(max_length=22, primary_key=True, serialize=False),
        ),
    ]