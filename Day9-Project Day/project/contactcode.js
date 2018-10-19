
var agents = [
    {Name:'Rachel Green',Phone:'010-222-3333'},
    {Name:'Monica Geller', Phone:"010-333-4444"},
    {Name:'Phoebe Buffay', Phone:"010-444-5555"},
    {Name:'Joey Tribbiani', Phone:'010-555-6666'},
    {Name:'Chandler Bing', Phone:'010-666-7777'},
    {Name:"Ross Geller", Phone:"010-777-8888"},
];

for(var i=0; i<agents.length; i++){
    console.log(agents[i]);
    var agentlist = document.getElementById('contactp');
    agentlist.innerHTML = agents
}