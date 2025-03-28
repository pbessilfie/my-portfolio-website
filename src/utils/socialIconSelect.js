export const socialIconSelect = (social, icon1,icon2,icon3,icon4)=>{
    switch (social) {
        case "Facebook":
            return icon1
        case "Twitter":
            return icon2
        case "Instagram":
            return icon3
        case "LinkedIn":
            return icon4
            
        default:
            break;
    }
}