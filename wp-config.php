<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'gshopping');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '!w.`-xDAsN#(J `4&6hT$[[8Ka#)@``_68@d$$8yzMxj%R{_a7Gz3s?.n)YwPL*X');
define('SECURE_AUTH_KEY',  '/#W%Y|V5Xr4)4m-=BaoS0.A/+ptPq=y{lNR11tcx^+HjWv7}<jDe-A9D]28jsPbg');
define('LOGGED_IN_KEY',    'X8Gp+-HOZ2Q-n]lWmV0N$NX<*3[-2j<FbZ-^p|HRR,K<(}^X:XLYx.P&2i22S~!i');
define('NONCE_KEY',        '8|@JlVVU*vodg=LD$tp-:quuWYqvrF+.*R)y99n.T@Y }]B9Fpa|;3}4P+jZpr(2');
define('AUTH_SALT',        'F kVt~v;2P[m@M6{6Q+}fb<m3dMtO{f>jbp~uv6ek]I0_4|;zcPoJ3p6Zv:Lg~l8');
define('SECURE_AUTH_SALT', '9{6D+o6n5-,WA~)dWXmEv%i?!&r$bz:YWGqMT~}__x{+C5}i3@OF=}|Jky-`g-FI');
define('LOGGED_IN_SALT',   'YN:}m?l*8?tC?DH!C>~i3Es=?!O|`ZR@xELx7%FcWIxJgh1!FmdB]?`d6,9UP]!V');
define('NONCE_SALT',       'N-)+^<Jwt4h+Vko],XXtc>iB3HWpX0[Ju*|<:M?J,%cpj@ TeNs :g[(?LKwWmE>');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
