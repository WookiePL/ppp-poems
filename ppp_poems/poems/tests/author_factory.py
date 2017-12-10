from ..models import Author
from ..tests.factory_base import FactoryBase


class AuthorFactory(FactoryBase):
    model = Author

    @classmethod
    def create(cls, name: str = None, surname: str = None):
        author = cls.model.objects.create(name=name or cls.generate_field("name"),
                                          surname=surname or cls.generate_field("surname"))

        return author
