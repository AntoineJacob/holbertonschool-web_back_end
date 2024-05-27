#!/usr/bin/python3
"""Basic dictionary"""

BaseCaching = __import__('base_caching').BasicCaching

class BasicCache(BaseCaching):
    """Class BasicCache who inherits from BaseCaching"""


    def put(self, key, item):
        """Must assign to the dictionary"""
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """Must return the value"""
        if key is not None and key in self.cache_data:
            return self.cache_data
        return None