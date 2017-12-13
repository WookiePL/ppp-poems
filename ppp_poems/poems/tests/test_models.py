from django.test import TestCase

from ..models import Author, Rate, Poem
from ..tests.author_factory import AuthorFactory
from ..tests.poem_factory import PoemFactory
from ..tests.rate_factory import RateFactory


class TestModelsWithDefaultParams(TestCase):
    def test_author_factory(self):
        name = "Author name 1"
        surname = "Author surname 1"

        self.assertEqual(Author.objects.count(), 0)

        author = AuthorFactory.create()

        self.assertEqual(author.name, name)
        self.assertEqual(author.surname, surname)

        self.assertEqual(Author.objects.get(id=1), author)

    def test_rate_factory(self):
        rating = 5

        self.assertEqual(Rate.objects.count(), 0)

        rate = RateFactory.create()

        self.assertEqual(rate.rating, rating)

        self.assertEqual(Rate.objects.get(id=1), rate)

    def test_example(self):
        Poem.objects.all().values()

        pass

    def test_poem_factory(self):
        title = "Poem title 1"
        description = "Poem description 1"
        content = "Poem content 1"

        self.assertEqual(Poem.objects.count(), 0)
        self.assertEqual(Author.objects.count(), 0)
        self.assertEqual(Rate.objects.count(), 0)

        poem = PoemFactory.create()

        self.assertEqual(poem.title, title)
        self.assertEqual(poem.description, description)
        self.assertEqual(poem.content, content)
        self.assertEqual(poem.author, Author.objects.get(id=1))
        self.assertEqual(poem.rates.get(id=1), Rate.objects.get(id=1))

    def test_many_authors_factory(self):
        self.assertEqual(Author.objects.count(), 0)

        authors = AuthorFactory.create_many(amount=5)

        self.assertEqual(Author.objects.count(), 5)
        self.assertEqual(len(authors), 5)


class TestModelsWithCustomParams(TestCase):
    def test_author_factory(self):
        name = "Łukasz"
        surname = "Janas"

        author = AuthorFactory.create(name=name, surname=surname)

        self.assertEqual(author.name, name)
        self.assertEqual(author.surname, surname)

    def test_rate_factory(self):
        rating = 3

        rate = RateFactory.create(rating=rating)

        self.assertEqual(rate.rating, rating)

    def test_poem_factory(self):
        title = "tytuł wiersza"
        description = "To jest jakiś opis wiersza xD"
        content = "Overview. Depending on the selected node in the tree view of tests, the Test Runner displays information on the various levels. \n In the Test Runner, you can view statistics of the tests, navigate to stacktrace, show or hide successful tests, and more. \n Use the Testing toolbar to control visual representation of the test results."
        author = AuthorFactory.create()
        rate = RateFactory.create(4)

        poem = PoemFactory.create(title=title, description=description, content=content, author=author, rates=rate)

        self.assertEqual(poem.title, title)
        self.assertEqual(poem.description, description)
        self.assertEqual(poem.content, content)
        self.assertEqual(poem.author, author)
        self.assertEqual(poem.rates.get(id=1), rate)
