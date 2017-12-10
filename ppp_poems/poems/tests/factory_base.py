import datetime

from django.db.models import Model


class FactoryBase:
    model = Model

    @classmethod
    def generate_field(cls, variable: str):
        return f"{cls.model.__name__} {variable} {cls.model.objects.count() + 1}"

    @classmethod
    def create_many(cls, amount: int) -> list:
        return [cls.create() for _ in range(0, amount)]

    @classmethod
    def generate_date(cls):
        amount_of_objects = cls.model.objects.count() + 1
        day = amount_of_objects if amount_of_objects <= 30 else amount_of_objects - 30
        return datetime.date(2017, 11, day)
