function getLunch(date)
{
    var day = new Date(date || Date.now());
    var days = constants.daysInMonth.join(".").substring(0, day.getMonth() * 3 - 1).split(".").reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    }, day.getDate());
    return constants.lunches[days % 28 + ""];
}

$(function()
{
    var lunchStr = "";
    var expanded = false;
    var lunch = getLunch();
    for(var i = 0; i < lunch.length; i++)
    {
        lunchStr += lunch[i] + "\n";
    }

    $('#toggle-lunch-dropdown').click(function()
    {
        if(expanded)
        {
            $('#tile-lunch-dropdown').css('height', '');
            $('#lunch-text').css('padding','');
            $('#lunch-text').text('');
            expanded = false;
        }
        else
        {
            $('#tile-lunch-dropdown').css('height', '350px');
            $('#lunch-text').css('padding','5px');
            $('#lunch-text').text(lunchStr);
            expanded = true;
        }
    });

    
    //console.log(lunchStr);
    //$('#lunch').text(lunchStr);
});