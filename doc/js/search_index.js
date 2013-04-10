var search_data = {"index":{"info":[["Bio","","Bio.html","",""],["Bio::Graphics","","Bio/Graphics.html","",""],["Bio::Graphics::Glyph","","Bio/Graphics/Glyph.html","","<p>A Glyph is an array of Primitive objects, holding information about the\ntype of Glyph being created. …\n"],["Bio::Graphics::MiniFeature","","Bio/Graphics/MiniFeature.html","","<p>The MiniFeature class represents any feature (e.g. a gene, transcript,\nexon, start codon, etc) on a track. …\n"],["Bio::Graphics::Page","","Bio/Graphics/Page.html","","<p>The Page class represents the top level container on which svg objects are\nwritten. It will contain a …\n"],["Bio::Graphics::Primitive","","Bio/Graphics/Primitive.html","","<p>The Primitive class is used to hold information about Glyphs. They contain\na Glyph type and then a Hash …\n"],["Bio::Graphics::SVGEE","","Bio/Graphics/SVGEE.html","","<p>The SVGEE class is used to create the text that will go into the final SVG\nfile. It takes information …\n"],["Bio::Graphics::Track","","Bio/Graphics/Track.html","","<p>The Track class holds and organises the features, ordering them into\ndifferent rows if they overlap\n"],["add","Bio::Graphics::Track","Bio/Graphics/Track.html#method-i-add","(feature)","<p>Adds a new MiniFeature to the the @features array\n"],["add_primitive","Bio::Graphics::SVGEE","Bio/Graphics/SVGEE.html#method-i-add_primitive","(primitive_object)","<p>Adds a Primitive object to the SVGEE object and makes the svg text for that\nPrimitive\n"],["add_track","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-add_track","(args)","<p>Calculates the colour or gradient for the supplied Bio::Graphics::Track\nobjects and adds them to the …\n"],["circle","Bio::Graphics::Glyph","Bio/Graphics/Glyph.html#method-c-circle","(args)","<p>Creates a circular Glyph\n<p><code>args</code>\n<p>radius = the radius of the circle  (10)\n"],["close_tag","Bio::Graphics::SVGEE","Bio/Graphics/SVGEE.html#method-i-close_tag","()","<p>Produces the closing text for an svg file\n"],["directed","Bio::Graphics::Glyph","Bio/Graphics/Glyph.html#method-c-directed","(args)","<p>Creates a polygon Glyph to indicate the direction in which the Glyph is\npointing <code>args</code>\n<p>width = the width …\n"],["down_triangle","Bio::Graphics::Glyph","Bio/Graphics/Glyph.html#method-c-down_triangle","(args)","<p>Creates a polygon Glyph for a downward-pointing triangle <code>args</code>\n<p>height = the height of the Glyph (10)\n<p>fill_color …\n"],["draw","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-draw","()","<p>Prints out the svg text\n"],["draw","Bio::Graphics::SVGEE","Bio/Graphics/SVGEE.html#method-i-draw","()","<p>Produces the svg text to display all the features on a Page\n"],["draw_circle","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-draw_circle","(args)","<p>Adds the Bio::Graphics::Primitive objects to the SVGEE object\n<p><code>args</code> - an Array of Bio::Graphics::Primitive …\n\n"],["draw_directed","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-draw_directed","(args)","<p>Adds the Bio::Graphics::Primitive objects to the SVGEE object\n<p><code>args</code> - an Array of Bio::Graphics::Primitive …\n\n"],["draw_down_triangle","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-draw_down_triangle","(args)","<p>Adds the Bio::Graphics::Primitive objects to the SVGEE object\n<p><code>args</code> - an Array of Bio::Graphics::Primitive …\n\n"],["draw_features","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-draw_features","(track)","<p>Takes a Bio::Graphics::Track object and sorts out the input information\ninto a user friendly format. …\n"],["draw_generic","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-draw_generic","(args)","<p>Adds the Bio::Graphics::Primitive objects to the SVGEE object\n<p><code>args</code> - an Array of Bio::Graphics::Primitive …\n\n"],["draw_histogram","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-draw_histogram","(args)","<p>Adds the Bio::Graphics::Primitive objects to the SVGEE object\n<p><code>args</code> - an Array of Bio::Graphics::Primitive …\n\n"],["draw_label","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-draw_label","(args)","<p>Adds the Bio::Graphics::Primitive objects to the SVGEE object\n<p><code>args</code> - an Array of Bio::Graphics::Primitive …\n\n"],["draw_scale","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-draw_scale","()","<p>Adds the  Bio::Graphics::Primitive objects to the SVGEE object\n"],["draw_span","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-draw_span","(args)","<p>Adds the Bio::Graphics::Primitive objects to the SVGEE object\n<p><code>args</code> - an Array of Bio::Graphics::Primitive …\n\n"],["draw_transcript","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-draw_transcript","(args)","<p>Adds the Bio::Graphics::Primitive objects to the SVGEE object\n<p><code>args</code> - an Array of Bio::Graphics::Primitive …\n\n"],["draw_up_triangle","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-draw_up_triangle","(args)","<p>Adds the Bio::Graphics::Primitive objects to the SVGEE object\n<p><code>args</code> - an Array of Bio::Graphics::Primitive …\n\n"],["from_json","Bio::Graphics::Page","Bio/Graphics/Page.html#method-c-from_json","(args)","<p>Takes a custom-written json file and writes an svg page to file which will\ncontain the given features …\n"],["generic","Bio::Graphics::Glyph","Bio/Graphics/Glyph.html#method-c-generic","(args)","<p>Creates a generic glyph, which is a rectangle\n<p><code>args</code>\n<p>height = the height of the Glyph (10)\n"],["get_limits","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-get_limits","()","<p>Calculates the Page scale-start and scale-stop position and the nucleotides\nper pixel for the current …\n"],["get_markup","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-get_markup","()","<p>Pulls together all track information to create svg text which will draw all\nthe features on the page …\n"],["get_rows","Bio::Graphics::Track","Bio/Graphics/Track.html#method-i-get_rows","()","<p>Calculates how many rows are needed per track for overlapping features and\nwhich row each feature should …\n"],["gradient","Bio::Graphics::Glyph","Bio/Graphics/Glyph.html#method-c-gradient","(gradient)","<p>Sets the the type (linear or radial) and colour of gradient for a\npre-defined gradient along with the …\n"],["gradient","Bio::Graphics::SVGEE","Bio/Graphics/SVGEE.html#method-i-gradient","(a)","<p>Takes the gradient information from a Glyph, which must be of type\n‘radial’ or ‘linear’ and creates the …\n"],["gradients","Bio::Graphics::Glyph","Bio/Graphics/Glyph.html#method-c-gradients","()","<p>The list of pre-defined gradients\n"],["label","Bio::Graphics::Glyph","Bio/Graphics/Glyph.html#method-c-label","(args)","<p>Creates a label Glyph to write text\n<p><code>args</code>\n<p>text = the text to write\n"],["new","Bio::Graphics::MiniFeature","Bio/Graphics/MiniFeature.html#method-c-new","(args)","<p>Creates a new MiniFeature\n<p><em>Arguments</em>\n<p>start = the start position of the feature\n"],["new","Bio::Graphics::Page","Bio/Graphics/Page.html#method-c-new","(args)","<p>Creates a new Page object.\n<p>A new Page contains the following arguments:\n<p>height = the height of the page …\n"],["new","Bio::Graphics::Primitive","Bio/Graphics/Primitive.html#method-c-new","(primitive,args)","<p>Creates a new Primitive and initialises the Hash keys into instance\nvariables\n<p><code>args</code>\n<p>primitive = the Primitive …\n"],["new","Bio::Graphics::SVGEE","Bio/Graphics/SVGEE.html#method-c-new","(args)","<p>Creates a new SVGEE object which will contain all the necessary objects to\ndisplay all the features on …\n"],["new","Bio::Graphics::Track","Bio/Graphics/Track.html#method-c-new","(args)","<p>Creates a new Track\n"],["open_tag","Bio::Graphics::SVGEE","Bio/Graphics/SVGEE.html#method-i-open_tag","()","<p>Produces the opening text for an svg file\n"],["overlaps","Bio::Graphics::Track","Bio/Graphics/Track.html#method-i-overlaps","(f1, f2)","<p>Calculates if two MiniFeature objects overlap by examining their start and\nend positions. If two features …\n"],["parse_gff","Bio::Graphics::Page","Bio/Graphics/Page.html#method-c-parse_gff","(gff_file)","<p>Parses a GFF file into an Array of Bio::GFF::GFF3::Record objects\n<p><code>gff_file</code> - a GFF-formatted file\n<p><code>returns</code> …\n"],["scale","Bio::Graphics::Glyph","Bio/Graphics/Glyph.html#method-c-scale","(args)","<p>Creates the scale across the top of the SVG page\n<p><code>args</code>\n<p>start = the start of the scale\n"],["span","Bio::Graphics::Glyph","Bio/Graphics/Glyph.html#method-c-span","(args)","<p>Creates a span glyph, which is a line\n<p><code>args</code>\n<p>height = the height of the Glyph (10)\n"],["to_px","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-to_px","(num)","<p>Provides the number of pixels required for a given number of nucleotides,\ne.g the length of a certain …\n"],["transcript","Bio::Graphics::Glyph","Bio/Graphics/Glyph.html#method-c-transcript","(args)","<p>Creates a transcript glyph, which is a number of different types of Glyph,\ndepending on the features …\n"],["up_triangle","Bio::Graphics::Glyph","Bio/Graphics/Glyph.html#method-c-up_triangle","(args)","<p>Creates a polygon Glyph for an upward-pointing triangle <code>args</code>\n<p>height = the height of the Glyph (10)\n<p>fill_color …\n"],["update","Bio::Graphics::Primitive","Bio/Graphics/Primitive.html#method-i-update","(args)","<p>Updates a Primitive and initialises any new parameters into instance\nvariables\n<p><code>args</code>\n<p>args = a hash of new …\n"],["write","Bio::Graphics::Page","Bio/Graphics/Page.html#method-i-write","(file)","<p>Writes the svg text to a file\n<p><code>file</code> - the file to which the svg text should be written\n\n"],["LICENSE","","LICENSE_txt.html","","<p>Copyright © 2012 Dan MacLean\n<p>Permission is hereby granted, free of charge, to any person obtaining a …\n"]],"searchIndex":["bio","graphics","glyph","minifeature","page","primitive","svgee","track","add()","add_primitive()","add_track()","circle()","close_tag()","directed()","down_triangle()","draw()","draw()","draw_circle()","draw_directed()","draw_down_triangle()","draw_features()","draw_generic()","draw_histogram()","draw_label()","draw_scale()","draw_span()","draw_transcript()","draw_up_triangle()","from_json()","generic()","get_limits()","get_markup()","get_rows()","gradient()","gradient()","gradients()","label()","new()","new()","new()","new()","new()","open_tag()","overlaps()","parse_gff()","scale()","span()","to_px()","transcript()","up_triangle()","update()","write()","license"],"longSearchIndex":["bio","bio::graphics","bio::graphics::glyph","bio::graphics::minifeature","bio::graphics::page","bio::graphics::primitive","bio::graphics::svgee","bio::graphics::track","bio::graphics::track#add()","bio::graphics::svgee#add_primitive()","bio::graphics::page#add_track()","bio::graphics::glyph::circle()","bio::graphics::svgee#close_tag()","bio::graphics::glyph::directed()","bio::graphics::glyph::down_triangle()","bio::graphics::page#draw()","bio::graphics::svgee#draw()","bio::graphics::page#draw_circle()","bio::graphics::page#draw_directed()","bio::graphics::page#draw_down_triangle()","bio::graphics::page#draw_features()","bio::graphics::page#draw_generic()","bio::graphics::page#draw_histogram()","bio::graphics::page#draw_label()","bio::graphics::page#draw_scale()","bio::graphics::page#draw_span()","bio::graphics::page#draw_transcript()","bio::graphics::page#draw_up_triangle()","bio::graphics::page::from_json()","bio::graphics::glyph::generic()","bio::graphics::page#get_limits()","bio::graphics::page#get_markup()","bio::graphics::track#get_rows()","bio::graphics::glyph::gradient()","bio::graphics::svgee#gradient()","bio::graphics::glyph::gradients()","bio::graphics::glyph::label()","bio::graphics::minifeature::new()","bio::graphics::page::new()","bio::graphics::primitive::new()","bio::graphics::svgee::new()","bio::graphics::track::new()","bio::graphics::svgee#open_tag()","bio::graphics::track#overlaps()","bio::graphics::page::parse_gff()","bio::graphics::glyph::scale()","bio::graphics::glyph::span()","bio::graphics::page#to_px()","bio::graphics::glyph::transcript()","bio::graphics::glyph::up_triangle()","bio::graphics::primitive#update()","bio::graphics::page#write()",""]}}