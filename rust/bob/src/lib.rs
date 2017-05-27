

pub fn reply(s: &'static str) -> &'static str {
    let last_index = s.len() - 1;
    if s.to_uppercase() == s {
        "Whoa, chill out!"
    } else if s.chars().nth(last_index).unwrap().to_string() == "?" {
        "Sure."
    } else if s.to_string() == "" {
        "Fine. Be that way!"
    } else {
        "Whatever."
    }
}
