#!/usr/bin/env python3
""" hash password """
import bcrypt


def hash_password(password: str) -> bytes:
    """ encrypting passwords """
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())


def is_valid(hashed_password: bytes, password: str) -> bool:
    """ check valid password """
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password)