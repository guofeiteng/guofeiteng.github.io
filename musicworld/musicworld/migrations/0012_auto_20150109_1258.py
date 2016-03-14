# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('musicworld', '0011_article_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='articleimage',
            field=models.FileField(default=datetime.datetime(2015, 1, 9, 12, 58, 23, 237521, tzinfo=utc), upload_to=b'image/article', verbose_name=b'article-image'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='article',
            name='author',
            field=models.CharField(default=datetime.datetime(2015, 1, 9, 12, 58, 30, 85666, tzinfo=utc), max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='article',
            name='music',
            field=models.FileField(default=datetime.datetime(2015, 1, 9, 12, 58, 34, 765834, tzinfo=utc), upload_to=b'music/article', verbose_name=b'article-music'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='userinformation',
            name='image',
            field=models.FileField(upload_to=b'/image/userinformation', null=True, verbose_name=b'user-image'),
            preserve_default=True,
        ),
    ]
