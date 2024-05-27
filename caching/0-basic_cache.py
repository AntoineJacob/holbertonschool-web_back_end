#!/usr/bin/python3
""" Task 0. Basic dictionary"""

BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """ inherits from BaseCaching and is a caching system """

    def put(self, key, item):
        """ assign to the dictionary """
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """ return the value linked to key"""
        if key is not None and key in self.cache_data:
            return self.cache_data[key]
        return None
