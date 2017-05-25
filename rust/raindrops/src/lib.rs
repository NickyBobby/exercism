

pub fn raindrops(n: i32) -> String {
    if n % 3 == 0 && n % 5 == 0 && n % 7 == 0 {
        "PlingPlangPlong".to_owned()
    } else if n % 5 == 0 && n % 7 == 0 {
        "PlangPlong".to_owned()
    } else if n % 3 == 0 && n % 7 == 0 {
        "PlingPlong".to_owned()
    } else if n % 3 == 0 && n % 5 == 0 {
        "PlingPlang".to_owned()
    } else if n % 3 == 0 {
        "Pling".to_owned()
    } else if n % 5 == 0 {
        "Plang".to_owned()
    } else if n % 7 == 0 {
        "Plong".to_owned()
    } else {
        n.to_string()
    }
}
