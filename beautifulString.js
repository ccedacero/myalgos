function beautifulBinaryString(b) {
    let c = 0;
    let idx = 0;

    while (idx < b.length - 2) {
        if (b[idx] == 0) {
            if (b[idx + 1] == 1 && b[idx + 2] == 0) {
                c++;
                idx += 2;
            }
        }
        idx++;
    }
    return c;
}
