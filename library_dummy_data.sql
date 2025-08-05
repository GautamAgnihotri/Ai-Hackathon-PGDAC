
-- Inserting into MEMBERS
INSERT INTO MEMBERS (name, email, phone, passwd, role) VALUES
('Alice Johnson', 'alice@example.com', '1234567890', 'alicepass', 'member'),
('Bob Smith', 'bob@example.com', '2345678901', 'bobpass', 'librarian'),
('Charlie Brown', 'charlie@example.com', '3456789012', 'charliepass', 'member'),
('Diana Prince', 'diana@example.com', '4567890123', 'dianapass', 'owner'),
('Evan Davis', 'evan@example.com', '5678901234', 'evanpass', 'member');

-- Inserting into BOOKS
INSERT INTO BOOKS (name, author, subject, price, isbn) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 299.99, '9780743273565'),
('1984', 'George Orwell', 'Dystopian', 199.50, '9780451524935'),
('A Brief History of Time', 'Stephen Hawking', 'Science', 350.00, '9780553380163'),
('The Art of War', 'Sun Tzu', 'Philosophy', 150.75, '9781599869773'),
('Clean Code', 'Robert C. Martin', 'Programming', 500.00, '9780132350884');

-- Inserting into COPIES
INSERT INTO COPIES (bookid, rack, status) VALUES
(1, 101, 'available'),
(2, 102, 'issued'),
(3, 103, 'available'),
(4, 104, 'issued'),
(5, 105, 'available');

-- Inserting into ISSUERECORD
INSERT INTO ISSUERECORD (copyid, memberid, issued, returndue, returned, fine) VALUES
(2, 1, '2025-08-01 10:00:00', '2025-08-08 10:00:00', NULL, 0.00),
(4, 3, '2025-07-25 15:30:00', '2025-08-01 15:30:00', '2025-08-02 16:00:00', 10.00),
(1, 5, '2025-08-03 09:15:00', '2025-08-10 09:15:00', NULL, 0.00),
(3, 1, '2025-07-28 11:45:00', '2025-08-04 11:45:00', '2025-08-03 12:00:00', 0.00),
(5, 5, '2025-08-04 14:00:00', '2025-08-11 14:00:00', NULL, 0.00);

-- Inserting into PAYMENTS
INSERT INTO PAYMENTS (memberid, amount, type, txtime, duedate) VALUES
(1, 100.00, 'membership', '2025-07-01 12:00:00', '2026-07-01 12:00:00'),
(3, 50.00, 'fine', '2025-08-02 17:00:00', NULL),
(5, 100.00, 'membership', '2025-06-15 09:00:00', '2026-06-15 09:00:00'),
(1, 25.00, 'fine', '2025-07-30 18:30:00', NULL),
(5, 10.00, 'fine', '2025-08-04 15:00:00', NULL);
