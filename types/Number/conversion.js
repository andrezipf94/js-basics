// By creating a new Number instance.
new Number(10);
new Number(0x10);
new Number(0o10);
new Number(0b10);
new Number();
new Number('This is not a number!');

// By numeric operators.
~~'10';
+'10'; // Be careful! if you try to "add" a string and a number, JS will concatenate and not convert.
'10' - 0;
'10' * 1;
'10' / 1;

// By using parseInt
parseInt('10', 10);
parseInt('9.9', 10); // This will return 9
parseInt('010', 8);
parseInt('11', 2);
parseInt('A', 16);

// By using parseFloat
// Be careful: this only converts decimal numbers
parseFloat('10');
parseFloat('9.9');
parseFloat('010'); // This returns 10
parseFloat('0xFF'); // This returns 0
parseFloat('0b100'); // This returns 0
parseFloat('A'); // This returns NaN