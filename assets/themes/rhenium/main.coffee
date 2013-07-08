W = window
D = document

if NO and navigator.userAgent.match(/(iPhone|iPad)/i)
    root = D.getElementById "content"
    maxScale = 200
    minScale = 25
    lastScale = NaN
    c = 0
    
    D.addEventListener "gesturestart", ( ->
        lastScale = parseInt root.style.fontSize
        lastScale = 100 if !(lastScale > 0)
        return
    ), true

    D.addEventListener "gesturechange", ( (event) ->
        # if c++%11 then return
        scale = event.scale
        if typeof(scale) is 'number'
            size = ((scale-1)/4*100+lastScale)
            if size > maxScale or size < minScale then return;
            root.style.fontSize = size+'%'
        return
    ), true
