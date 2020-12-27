
   window.onload=function(){
    const curliForm = document.getElementById('curliForm');
    const generateButton = document.getElementById('generateCurliCall');
    const copy = document.getElementById('copyCurliBtn');
    const curliCallSelection = document.getElementById('curliCall');
    const output = document.getElementById('generatedCurliCall');
    const reset = document.getElementById('clearForm')
    const fabric = document.getElementById('fabric')
    const auth = document.getElementById('auth')

    console.log(curliCallSelection);
    curliCallSelection.addEventListener('change', () => {
        const message = document.getElementById("inputPrompt");
        if (!curliCallSelection.value == '') {
            message.className = '';
        }
        if (curliCallSelection.value == 'AID' ||
            curliCallSelection.value == 'CAMPAIGN' ||
            curliCallSelection.value == 'CGROUP' ||
            curliCallSelection.value == 'CREATIVE' ||
            curliCallSelection.value == 'SEGMENT' ||
            curliCallSelection.value == 'INSIGHTTAG') {
            message.textContent = `Please enter ${curliCallSelection.value} ID`
        }
        if (curliCallSelection.value == 'USERS') {
            message.textContent = 'Please enter Account ID'
        }
        if (curliCallSelection.value == 'LGFINFO') {
            message.textContent = 'Please enter Form ID'
        }
        if (
            curliCallSelection.value == 'INFERREDSKILLS' ||
            curliCallSelection.value == 'INFERREDPOSITIONS' ||
            curliCallSelection.value == 'SENDERAUTH' ||
            curliCallSelection.value == 'REPORTEDCREATIVES' ||
            curliCallSelection.value == 'OPTOUTS' ||
            curliCallSelection.value == 'CREATIVEFLAGGED') {
            message.textContent = 'Please Enter MID'
        }
        if (curliCallSelection.value == 'CREATIVEACTIVITY') {
            message.textContent = 'Please Enter Activity URN'
        }
        if (curliCallSelection.value == 'CREATIVESHARE') {
            message.textContent = 'Please Enter Share URN';
        }
        if (curliCallSelection.value == 'LASTMODIFIEDDATE') {
            message.textContent = 'Please enter UGC Urn'
        }
        if (curliCallSelection.value == 'SHORTLINK') {
            message.textContent = 'Please enter URL';
        }
        if (curliCallSelection.value == 'REGION') {
            message.textContent = 'Please enter Location ID'
        }
        if (curliCallSelection.value == 'REVIEWITEM') {
            message.textContent = 'Please enter Creative ID'
        }
        if (curliCallSelection.value == 'REVIEWLOG') {
            message.textContent = 'Please enter Review Item ID'
        }

    })

    // submit event
    curliForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const input = document.getElementById('input').value;

        if (curliCallSelection.value == "AID") {
            output.innerHTML = `curli -H 'Authenticate: X-RestLI SUPERUSER:urn:li:system:0' "d2://adAccountsV2/${input}" -X GET ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "CAMPAIGN") {
            output.innerHTML = `curli -H "Authenticate: X-RestLI SUPERUSER:urn:li:system:0" "d2://adCampaignsV2/${input}" -X GET ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "CGROUP") {
            output.innerHTML = `curli -H "Authenticate: X-RestLI SUPERUSER:urn:li:system:0" "d2://adCampaignGroupsV2/${input}" -X GET ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "CREATIVE") {
            output.innerHTML = `curli -H "Authenticate: X-RestLI SUPERUSER:urn:li:system:0" "d2://adCreativesV2/${input}" -X GET ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "SEGMENT") {
            output.innerHTML = `curli -H 'Authenticate: X-RestLI SUPERUSER:urn:li:system:0' "d2://adSegmentsV2/${input}" -X GET ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "USERS") {
            output.innerHTML = `curli -H 'Authenticate: X-RestLI SUPERUSER:urn:li:system:0' "d2://adAccountUsersV2?account=urn:li:sponsoredAccount:${input}&q=account&totals=true" -X GET ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "LGFINFO") {
            output.innerHTML = `curli -X GET --dv-auth SELF -H "Authenticate: X-RestLI SUPERUSER:urn:li:system:0" 'd2://adForms/${input}' -X GET ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "INSIGHTTAG") {
            output.innerHTML = `curli -k -H "Authenticate: X-RestLI SUPERUSER:SYSTEM" -H 'X-RestLi-Protocol-Version: 2.0.0' -s "d2://insightTagAccounts?q=insightTag&insightTag=urn%3Atscp%3AinsightTag%3${input}A" ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "REVIEWITEM") {
            output.innerHTML = `curli -X GET -D --H -H "Authenticate: X-RestLI SUPERUSER:urn:li:system:0" 'd2://reviewItems?q=criteria&queueId=ARQ&target=urn:li:sponsoredCreative:${input}' ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "REVIEWLOG") {
            output.innerHTML = `curli -i -H 'Authenticate: X-RestLI SUPERUSER:urn:li:system:0' -X GET 'd2://reviewItems/${input}/reviewItemChangeLogs' ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "CREATIVEFLAGGED") {
            output.innerHTML = `curli --pretty-print "d2://adFlaggedContent?member=urn%3Ali%3Amember%3A${input}&q=member" -X GET -H 'X-RestLi-Protocol-Version: 2.0.0' ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "CREATIVEACTIVITY") {
            output.innerHTML = `curli -H 'Authenticate: X-RestLI SUPERUSER:urn:li:system:0' "d2://adCreativesV2?q=search&search.reference.values[0]=urn:li:activity:${input}&totals=true" -X GET ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "CREATIVESHARE") {
            output.innerHTML = `curli --pretty-print "d2://adCreativesV2?q=search&search.reference.values[0]=urn:li:share:${input}&totals=true" -X GET -H 'Authenticate: X-RestLI SUPERUSER:urn:li:system:0' -g ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "LASTMODIFIEDDATE") {
            output.innerHTML = `curli --fabric prod-ltx1 "d2://ugcPosts/urn:li:ugcPost:${input}?viewer=urn:li:member:1" ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "INFERREDSKILLS") {
            output.innerHTML = `curli -v -X GET "d2://memberDerivedData/urn:li:member:${input}?fields=standardizedSkills" ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "INFERREDPOSITIONS") {
            output.innerHTML = `curli -v -X GET "d2://memberDerivedData/urn:li:member:${input}?fields=standardizedPositions" ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "SENDERAUTH") {
            output.innerHTML = `curli --pretty-print "d2://adInMailMemberSenderPermissions/member=urn:li:member:${input}?q=member" -X GET -H 'Authenticate: X-RestLI SUPERUSER:urn:li:system:1' ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "REPORTEDCREATIVES") {
            output.innerHTML = `curli --pretty-print "d2://adFlaggedContent?member=urn%3Ali%3Amember%3A${input}&q=member" -X GET -H 'X-RestLi-Protocol-Version: 2.0.0' ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "OPTOUTS") {
            output.innerHTML = `curli -f --pretty-print -H "Authenticate: X-RestLi SUPERUSER:SYSTEM" "d2://adTargetingData?q=adTargetingData&adTargetId.type=LINKEDIN&adTargetId.idValue=${input}" ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "REGION") {
            output.innerHTML = `curli --pretty-print "d2://geo/${input}" -X GET ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "CHECKBALANCE") {
            output.innerHTML = `curli --pretty-print "d2://accountBalances?owner=urn:li:sponsoredAccount:${insight}&q=owner" -X GET ${fabric.value} ${auth.value}`;
        }
        if (curliCallSelection.value == "SHORTLINK") {
            output.innerHTML = `curli --pretty-print "d2://shortlink/${input}" -get ${fabric.value} ${auth.value}`;
        }
    })

    // copy to clipboard 
    copy.addEventListener('click', () => {
        if (!output.innerHTML == "") {
            output.select()
            output.setSelectionRange(0, 99999)
            document.execCommand("copy")
            document.getElementById("copyNotification").className = ""
        } else {
            alert('Please Provide an Input')
        }
    });

    // reset form
    reset.addEventListener('click', () => {
        curliForm.reset()
        output.innerHTML = ''
        document.getElementById("copyNotification").className = "hidden"
        document.getElementById('inputPrompt').className = 'hidden'
})
}