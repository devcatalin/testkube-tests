"""Test https://jsonplaceholder.typicode.com/todos/1 returns status 200 with id=1, userId=1, and completed=false."""

import json
import unittest
from urllib.request import urlopen


class JsonPlaceholderTodo1Test(unittest.TestCase):
    def test_get_todo_1(self):
        with urlopen('https://jsonplaceholder.typicode.com/todos/1') as response:
            self.assertEqual(response.status, 200)
            payload = json.loads(response.read().decode('utf-8'))

        self.assertIsInstance(payload, dict)
        self.assertEqual(payload['id'], 1)
        self.assertEqual(payload['userId'], 1)
        self.assertFalse(payload['completed'])


if __name__ == '__main__':
    unittest.main()
