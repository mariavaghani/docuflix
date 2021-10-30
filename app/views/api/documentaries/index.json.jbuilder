json.array! @documentaries do |documentary|
  json.partial! 'api/documentaries/documentary', documentary: documentary
end