function basicRecursion(n) {
    if (n < 0) {
        return;
    } else {
        console.log(n);
        basicRecursion(n - 1);
    }
}

basicRecursion(10);

/*basicRecursion(10)
basicRecursion(9)
│
├── basicRecursion(8)
│   │
│   ├── basicRecursion(7)
│   │   │
│   │   ├── basicRecursion(6)
│   │   │   │
│   │   │   ├── basicRecursion(5)
│   │   │   │   │
│   │   │   │   ├── basicRecursion(4)
│   │   │   │   │   │
│   │   │   │   │   ├── basicRecursion(3)
│   │   │   │   │   │   │
│   │   │   │   │   │   ├── basicRecursion(2)
│   │   │   │   │   │   │   │
│   │   │   │   │   │   │   ├── basicRecursion(1)
│   │   │   │   │   │   │   │   │
│   │   │   │   │   │   │   │   └── basicRecursion(0)
│   │   │   │   │   │   │   │       │
│   │   │   │   │   │   │   │       └── basicRecursion(-1) (base case)
│   │   │   │   │   │   │   │
│   │   │   │   │   │   │   └── basicRecursion(0) (base case)
│   │   │   │   │   │   │
│   │   │   │   │   │   └── basicRecursion(0) (base case)
│   │   │   │   │   │
│   │   │   │   │   └── basicRecursion(0) (base case)
│   │   │   │   │
│   │   │   │   └── basicRecursion(0) (base case)
│   │   │   │
│   │   │   └── basicRecursion(0) (base case)
│   │   │
│   │   └── basicRecursion(0) (base case)
│   │
│   └── basicRecursion(0) (base case)
│
└── basicRecursion(0) (base case)

│   │   │   │  
*/