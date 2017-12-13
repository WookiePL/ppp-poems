from ..models import Rate
from ..tests.factory_base import FactoryBase


class RateFactory(FactoryBase):
    model = Rate

    @classmethod
    def create(cls, rating: int = None):
        rate = cls.model.objects.create(rating=rating or 5)
        return rate
