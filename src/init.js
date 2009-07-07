/**
 * Just an initialization script
 *
 * @copyright 2009 Nikolay V. Nemshilov aka St.
 */

['rc',
 'rc/card',
 'rc/deck'

].each(function(name) {
  document.writeln('<scr'+'ipt src="src/'+name+'.js"></scr'+'ipt>');
});