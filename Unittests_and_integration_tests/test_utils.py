#!/usr/bin/env python3
""" Unittests """

import unittest
from parameterized import parameterized
from utils import access_nested_map, get_json, memoize
from unittest.mock import patch, Mock


class TestAccessNestedMap(unittest.TestCase):
    """ nested map test function """
    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2)
    ])
    def test_access_nested_map(self, nested_map, path, expected):
        """ test access nested map """
        self.assertEqual(access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ({}, ("a",)),
        ({"a": 1}, ("a", "b"))
    ])
    def test_access_nested_map_exception(self, nested_map, path):
        """ test exception """
        with self.assertRaises(KeyError):
            access_nested_map(nested_map, path)


class TestGetJson(unittest.TestCase):
    """ json unittest """
    @parameterized.expand([
        ("http://example.com", {"payload": True}),
        ("http://holberton.io", {"payload": False})
    ])
    def test_get_json(self, test_url, test_payload):
        """ test get json """
        class Mocked(Mock):
            """ mocked class """

            def json(self):
                """ json method mocked """
                return test_payload

        with patch('requests.get') as MockClass:
            MockClass.return_value = Mocked()
            self.assertEqual(get_json(test_url), test_payload)


class TestMemoize(unittest.TestCase):
    """ memoize unittest """

    def test_memoize(self):
        """ Tests memoize """

        class TestClass:
            """ Test class """

            def a_method(self):
                """ method to always return 42 """
                return 42

            @memoize
            def a_property(self):
                """ returns memoized property """
                return self.a_method()

        with patch.object(TestClass, 'a_method', return_value=42) as mocked:
            test_class = TestClass()
            return1 = test_class.a_property
            return2 = test_class.a_property

            self.assertEqual(return1, 42)
            self.assertEqual(return2, 42)
            mocked.assert_called_once()
