class ArmstrongNumbers {

	boolean isArmstrongNumber(int numberToCheck) {
		String numberString = Integer.toString(numberToCheck);
		char[] numberArray = numberString.toCharArray();
		int resultNumber = 0;
		for (int i = 0; i < numberArray.length; i++) {
			int newNumber = Character.getNumericValue(numberArray[i]);
			resultNumber += newNumber * newNumber;
		}
		System.out.println(numberToCheck == resultNumber);
		return numberToCheck == resultNumber;
	}

}
