# Generated by Django 4.2.3 on 2023-07-22 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=11)),
                ('dsg', models.CharField(max_length=50)),
                ('salary', models.IntegerField()),
                ('email', models.CharField(max_length=50)),
                ('state', models.CharField(blank=True, default='', max_length=50, null=True)),
                ('city', models.CharField(blank=True, default='', max_length=50, null=True)),
            ],
        ),
    ]
