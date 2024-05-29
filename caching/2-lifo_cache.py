#!/usr/bin/python3
""" Task 2. LIFO Caching """

BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """ inherits from BaseCaching and is a caching system """
    def __init__(self):
        super().__init__()
        self.keys = []

    def put(self, key, item):
        """ assign to the dictionary """
        if key is not None and item is not None:
            self.cache_data[key] = item
            if key not in self.keys:
                self.keys.append(key)
            if len(self.keys) > BaseCaching.MAX_ITEMS:
                discard = self.keys.pop(-2)
                del self.cache_data[discard]
                print('DISCARD: {:s}'.format(discard))

    def get(self, key):
        """ return the value linked to key"""
        if key is not None and key in self.cache_data:
            return self.cache_data[key]
        return None