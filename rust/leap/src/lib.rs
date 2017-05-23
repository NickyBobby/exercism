pub fn is_leap_year(year: i32) -> bool {
    let divisible_by = |n: i32| -> bool { year % n == 0 };
    (divisible_by(400)) || (divisible_by(4)) && (!divisible_by(100))
}
