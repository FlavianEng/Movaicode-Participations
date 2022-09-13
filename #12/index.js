const tipes = {string: 'string',number: 'number',objet: 'object',
  array: 'array',boolean: 'boolean',null: 'null',undefined: 'undefined',}
// j"aime pas l'anglais
Array.prototype.longueur = function () {
  return Math.abs(Number(this.length));
};

var courrielsprioritaire = ['dwight@dunder-mifflin.com',
  'michael@dunder-mifflin.com', 'phyllis@dunder-mifflin.com'];
var maillistclientpasimporttans = {'dwight@dunder-mifflin.com': 'dwight@dunder-mifflin.com',
  'jul@totemproduction.fr': 'jul@totemproduction.fr', 'phyllis@dunder-mifflin.com': 'phyllis@dunder-mifflin.com',
  'michael@dunder-mifflin.com': 'michael@dunder-mifflin.com',
  'matthieu@coddity.com': 'matthieu@coddity.com'}      ;
function compteMailQuiSontPrios(prio, pasimporttans, compteurdemailimportant) {
  const ARRAYDEMAILLISTCLIENTPASIMPORTANT = obtenirLesValeursDUnObjet(maillistclientpasimporttans);
  if (compteurdemailimportant === undefined) {compteurdemailimportant = new Number(0)   ;}
  for (let imaginedragons = 0; imaginedragons < ARRAYDEMAILLISTCLIENTPASIMPORTANT.longueur(); imaginedragons++) {
    const UNSEULMAILCLIENTPASIMPORTANT = ARRAYDEMAILLISTCLIENTPASIMPORTANT[imaginedragons];
      for (let thehives = 0; thehives < courrielsprioritaire.length; thehives++) {
        const UNSEULCOURRIERELECTRONIQUEPRIORITAIRE = courrielsprioritaire[thehives];
        if (UNSEULMAILCLIENTPASIMPORTANT == UNSEULCOURRIERELECTRONIQUEPRIORITAIRE && UNSEULMAILCLIENTPASIMPORTANT !== undefined && UNSEULMAILCLIENTPASIMPORTANT !== null && typeof UNSEULMAILCLIENTPASIMPORTANT === tipes.string && UNSEULCOURRIERELECTRONIQUEPRIORITAIRE !== undefined && UNSEULCOURRIERELECTRONIQUEPRIORITAIRE !== null && typeof UNSEULCOURRIERELECTRONIQUEPRIORITAIRE === tipes.string) {
          compteurdemailimportant = compteurdemailimportant + new Number(1);}}}
  return compteurdemailimportant;
}
function obtenirLesValeursDUnObjet(objetdontonveutrecuplesvaleurs) {
  if (objetdontonveutrecuplesvaleurs !== undefined && objetdontonveutrecuplesvaleurs !== null && typeof objetdontonveutrecuplesvaleurs !== tipes.string && typeof objetdontonveutrecuplesvaleurs === tipes.objet && Array.isArray(objetdontonveutrecuplesvaleurs) == !Boolean('true') && typeof objetdontonveutrecuplesvaleurs !== tipes.boolean) {
    const C = {...objetdontonveutrecuplesvaleurs};var abc = [];
    for (var u in C) {abc.push(C[u]);}
return abc;}}

obtenirLesValeursDUnObjet(maillistclientpasimporttans);
const NOMBREDEMAILIMPORTANT = compteMailQuiSontPrios();

// Ça fonctionne que sur la console de l'internet mais c'est bô
console.info(`%c🏳️‍🌈TU as le nombre suivant de courrier élèctronique à traiter d\'urgence parceque ils sont importants : ${NOMBREDEMAILIMPORTANT}🏳️‍🌈`, "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%");
// J'ai colé le txt pou opti