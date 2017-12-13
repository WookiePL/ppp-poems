from ..models import Poem, Rate, Author
from ..tests.author_factory import AuthorFactory
from ..tests.factory_base import FactoryBase
from ..tests.rate_factory import RateFactory


class PoemFactory(FactoryBase):
    model = Poem

    @classmethod
    def create(cls,
               title: str = None,
               description: str = None,
               content: str = None,
               rates: Rate = None,
               author: Author = None):
        if rates is None:
            rates = RateFactory.create()

        poem = cls.model.objects.create(
            title=title or cls.generate_field("title"),
            description=description or cls.generate_field("description"),
            content=content or cls.generate_field("content"),
            author=author or AuthorFactory.create())
        poem.rates.add(rates)

        return poem
